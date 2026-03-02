<?php
// ===================================================
// book-a-visit-api.php
// Paramantra CRM endpoint for "Book a Visit" form
// ===================================================

// --- CORS Headers ---
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle browser preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- Read & Decode JSON Input ---
$raw  = file_get_contents('php://input');
$body = json_decode($raw, true);

if (!$body) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON payload']);
    exit();
}

// --- Helper: Split full name into first & last name ---
function splitName(string $fullName): array {
    $parts  = explode(' ', trim($fullName), 2);
    $fName  = $parts[0] ?? '';
    $lName  = $parts[1] ?? '.'; // CRM doesn't like empty l_name
    return [$fName, $lName];
}

[$fName, $lName] = splitName($body['name'] ?? '');

// --- Build CRM Payload ---
$input = [
    'rep_id'      => 'ramya@rrlprojects.com',
    'channel_id'  => 'Book a Visit',
    'subject'     => 'Lead from Website',
    'f_name'      => $fName,
    'l_name'      => $lName,
    'email'       => $body['email']   ?? '',
    'phonefax'    => $body['phone']   ?? '',
    'notes'       => $body['message'] ?? 'I am Interested in this project. Please call me',
    'project'     => $body['project'] ?? 'RRL Palacio',
    'prefe_09498' => $body['preferredDate'] ?? date('d-m-Y'),
    'alert_client'=> 0,
    'alert_rep'   => 0,
];

// --- CRM Credentials ---
$url      = 'https://cloud.paramantra.com/paramantra/api/data/new/format/json';
$api_key  = '01EFBEJs1HoKJpIqqNBxsoJDA3';
$app_name = '16F24';

// --- cURL Request ---
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,            $url);
curl_setopt($ch, CURLOPT_HTTPHEADER,     ["X-API-KEY: $api_key ", "ACTION-ON: $app_name"]);
curl_setopt($ch, CURLOPT_POSTFIELDS,     $input);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
curl_setopt($ch, CURLOPT_TIMEOUT,        30);
curl_setopt($ch, CURLOPT_USERPWD,        $api_key);

$response  = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// --- Return Response ---
if ($http_code >= 200 && $http_code < 300) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'CRM submission failed']);
}
?>
