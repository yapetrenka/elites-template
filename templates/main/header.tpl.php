<?include($_SERVER['DOCUMENT_ROOT']."/templates/header.tpl.php")?>
<div class="main-container<?=$page=='index' ? ' index-page' : ''?>">
<header class="main-header">
    <div class="layout-main">
        header
    </div>
</header>

<main class="main-center">
    <?if ($page!='index') {?>
    <div class="layout-main">
        <h1 class="ttl-base"><?=$PAGE['meta_title']?></h1>
		<div itemscope itemtype="https://schema.org/WebPage" class="breadcrumbs">
			<div itemprop="breadcrumb">
				<span itemscope itemtype="https://data-vocabulary.org/Breadcrumb" class="breadcrumbs__item">
					<a href="/" class="breadcrumbs__link" itemprop="url"><span itemprop="title">Главная</span></a>
				</span>
				<span class="breadcrumbs__item"><?=$PAGE['meta_title']?></span>
			</div>
		</div>
    <?}?>