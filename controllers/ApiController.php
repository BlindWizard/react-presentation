<?php

namespace app\controllers;

use app\models\ApiResponse;
use app\models\ResponseStatus;
use Yii;
use yii\web\Controller;
use yii\web\Response;

/**
 * Контроллер апи.
 */
class ApiController extends Controller {
    /**
     * Главная страница приложения.
     */
    public function actionIndex() {
        return $this->render('index');
    }

    /**
     * Энд-пойнт приложения.
     *
     * @param bool $requiredResult
     *
     * @return ApiResponse
     */
    public function actionApi(bool $requiredResult) {
        Yii::$app->response->format = Response::FORMAT_JSON;
        $response = new ApiResponse();

        if (true === $requiredResult) {
            $response->status = ResponseStatus::STATUS_OK;
        }
        else {
            $response->status  = ResponseStatus::STATUS_ERROR;
            $response->message = 'Операция не может быть выполнена';
        }

        return $response;
    }
}