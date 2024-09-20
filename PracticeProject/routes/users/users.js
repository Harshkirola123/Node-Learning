const express = require('express');

const router = express.Router();
const {handleGetAllUser,handleGetUserById,handleCreateNewUser} = require('../../controllers/user')

router.get('/',handleGetAllUser)
router.post('/',handleCreateNewUser)
router.route('/:id')
    .get(handleGetUserById)

module.exports = router;