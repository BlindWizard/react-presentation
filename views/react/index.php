<?php
    use yii\helpers\Url;
?>

<div data-role="widget" data-url="<?= Url::to(['react/api', 'requiredResult' => true]) ?>"></div>

<br>

<div data-role="widget" data-url="<?= Url::to(['react/api', 'requiredResult' => false]) ?>"></div>