$(function () {
    // 1.进行表单校验配置
    // 校验要求:
    // (1)用户名不能为空,长度为2-6位
    // (2)密码不能为空,长度为6-12位
    // 进行表单校验初始化
    $("#form").bootstrapValidator({
        //配置图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        // 字段列表 field,要先在input 中配置name属性
        fields: {
            //校验用户名
            username: {
                //校验规则
                validators: {
                    //不能为空
                    notEmpty: {
                        //提示信息
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度位2-6位'
                    },
                }
            },
            //密码
            password: {
                //配置校验规则
                validators: {
                    //不能为空
                    notEmpty: {
                        //提示信息
                        message: '密码不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '密码长度必须是6-12位'
                    }
                }
            }
        }
    })
    //表单提交通过ajax提交
    $("#form").on('success.form.bv', function (e) {
        //阻止默认的提交
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/employee/employeeLogin',
            //表单序列化,自动将所有配置了name属性的input值进行拼接用于提交
            data: $('#form').serialize(),
            dataType: 'json',
            success: function (info) {
                console.log(info);
                if (info.error === 1000) {
                    alert('用户名不存在');
                }
                if (info.error === 10001) {
                    alert('密码错误');
                }
                if (info.success) {
                    location.href = 'index.html';
                }
            }
        })
    })
})