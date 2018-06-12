<?php
    use yii\helpers\Url;
?>

<div data-role="widget"
     data-url="<?= Url::to(['api/api', 'requiredResult' => true]) ?>"
></div>

<br>

<div data-role="widget"
     data-url="<?= Url::to(['api/api', 'requiredResult' => false]) ?>"
></div>
