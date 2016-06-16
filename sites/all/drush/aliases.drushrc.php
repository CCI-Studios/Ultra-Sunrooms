<?php

$aliases['dev'] = array(
	'uri'=> 'ultrasunrooms.ccistaging.com',
	'root' => '/home/staging/subdomains/ultrasunrooms/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=>'-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'ultrasunrooms.com',
	'root' => '/home/ultra/subdomains/live/public_html',
	'remote-host'=> '208.86.159.72',
	'remote-user'=> 'ultra',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
);






