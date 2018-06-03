<?php

namespace app\controllers;

use app\models\ApiResponse;
use app\models\ResponseStatus;
use yii\web\Controller;

class ReactController extends Controller {
    public function actionIndex() {
        return $this->render('index');
    }

    public function actionApi(bool $requiredResult) {
        $response = new ApiResponse();

        if (true === $requiredResult) {
            $response->status = ResponseStatus::STATUS_OK;
        }
        else {
            $response->status  = ResponseStatus::STATUS_ERROR;
            $response->message = 'Операция не может быть выполнена';
        }

        return json_encode($response);
    }
}