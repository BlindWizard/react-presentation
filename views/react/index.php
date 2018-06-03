<?php
    use yii\helpers\Url;
?>

<div data-role="widget" data-url="<?= Url::to(['react/api', 'requiredResult' => true]) ?>">
    <button type="button" data-role="button" class="btn btn-success">Успешное действие</button>
    <div data-role="popover" class="message"></div>
</div>

<br>

<div data-role="widget" data-url="<?= Url::to(['react/api', 'requiredResult' => false]) ?>">
    <button type="button" data-role="button" class="btn btn-danger">Действие с ошибкой</button>
    <div data-role="popover" class="message"></div>
</div>