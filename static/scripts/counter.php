<?php
$file = __DIR__ . '/counter.txt';
$log = __DIR__ . '/log.txt';

$hasVisited = isset($_COOKIE['visited']);
file_put_contents($log, date('c') . " | IP: {$_SERVER['REMOTE_ADDR']} | Cookie: " . ($hasVisited ? 'YES' : 'NO') . PHP_EOL, FILE_APPEND);

$fp = fopen($file, 'c+');
if (flock($fp, LOCK_EX)) {
    $count = (int)fread($fp, 100);
    if (!$hasVisited) {
        $count++;
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, $count);
        setcookie('visited', '1', time() + 86400, "/");
        file_put_contents($log, " → Incremented to $count\n", FILE_APPEND);
    } else {
        file_put_contents($log, " → Not incremented\n", FILE_APPEND);
    }
    flock($fp, LOCK_UN);
} else {
    file_put_contents($log, "❌ Failed to lock file\n", FILE_APPEND);
}
fclose($fp);

header('Content-Type: application/json');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');

echo json_encode(['visits' => $count]);
