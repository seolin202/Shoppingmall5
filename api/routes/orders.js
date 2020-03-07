// express loading
const express = require('express');
// express안에 있는 모듈 중 .Router();를 쓴다
// 이것을 Router라고 상수화
const router = express.Router();

// order와 관련된 api 즉 order CRUD는 여기서 진행
router.get('/', (req, res) => {
    res.json({
        msg: "orders data get"
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: "orders posting"
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: "orders updated"
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: "orders deleted"
    });
});
// router 모듈화 후 out
module.exports = router;