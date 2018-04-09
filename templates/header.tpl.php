<?header ("Content-Type: text/html;charset=utf-8"); ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
	<title><?=trim($PAGE['meta_title'])?></title>
<?if(!empty($PAGE['meta_keywords'])){?>
    <meta name="keywords" content="<?=$PAGE['meta_keywords']?>">
<?}?>
<?if(!empty($PAGE['meta_description'])){?>
    <meta name="description" content="<?=$PAGE['meta_description']?>">
<?}?>
    <meta name="viewport" content="width=device-width, user-scalable=no, maximum-scale=1.0, initial-scale=1.0, minimum-scale=1.0">
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="/skin/styles/foundation.css" type="text/css" media="screen">
	<link rel="stylesheet" href="/skin/styles/app.css" type="text/css" media="screen">
	<?if(isset($PAGE['og']) && is_array($PAGE['og'])){?>
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://<?=$_SERVER['HTTP_HOST']?><?=$_SERVER['REQUEST_URI']?>" />
		<meta property="og:title" content="<?=trim($PAGE['name'])?>" />
		<? if($PAGE['og']['image'] && is_array($PAGE['og']['image']) && count($PAGE['og']['image'])){?>
		<?foreach($PAGE['og']['image'] as $v){?>
		  <meta property="og:image" content="http://<?=$_SERVER['HTTP_HOST']?><?=$v?>" /> 
		<?}?>
		<?}else{?>
			<meta property="og:image" content="http://<?=$_SERVER['HTTP_HOST']?>/skin/images/logo.png" />
		<?}?>
	<?}?>
</head>
<body>