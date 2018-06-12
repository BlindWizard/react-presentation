<?php
    use yii\helpers\Url;
?>

<div data-role="widget"
     data-url="<?= Url::to(['api/api']) ?>"
     data-result="true"
>
</div>

<br>

<div data-role="widget"
     data-url="<?= Url::to(['api/api']) ?>"
     data-result="false"
>
</div>
