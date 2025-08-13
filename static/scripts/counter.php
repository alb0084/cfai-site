<?php
$file = __DIR__ . '/counter.txt';
$count = file_exists($file) ? (int)file_get_contents($file) : 0;

if (!isset($_COOKIE['visited'])) {
    $count++;
    file_put_contents($file, $count);
    setcookie('visited', '1', time() + 86400, "/"); 
}

header('Content-Type: application/json');
echo json_encode(['visits' => $count]);
