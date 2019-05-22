(function() {
    // 1.对本地共有路径进行整理
    var routeurl = 'http://10.31.163.38/js/fallibility/';

    //1.获取元素
    function $(selector) {
        if (selector.startsWith('.')) {
            return document.querySelectorAll(selector);
        } else if (selector.startsWith('#')) {
            return document.querySelector(selector);
        } else {
            if (document.querySelectorAll(selector)[0]) {
                return document.querySelectorAll(selector);
            } else {
                throw new Error('元素标签不存在');
            }
        }
    }

    // 获取元素
    var oBtn = $('#sub-btn');
    var oTitle = $('#title');
    var oDescription = $('#description');
    var oResolve = $('#resolve');
    var oTbody = $('tbody')[0];


    // 点击按钮将信息提交到后端
    oBtn.onclick = function() {
            var oTitleValue = oTitle.value;
            // alert(oTitleValue);
            var oDescriptionValue = oDescription.value;
            var oResolveValue = oResolve.value;
            if (oTitleValue != "" && oDescriptionValue != "") {
                ajax({
                    type: 'post',
                    url: routeurl + 'php/getdata.php',
                    data: {
                        title: oTitleValue,
                        description: oDescriptionValue,
                        resolve: oResolveValue,
                    },
                    success: function() {
                        location.reload(true);
                    },
                })
            } else {
                alert('标题和问题描述不能为空');
            }
        }
        // 3.渲染结构
    ajax({
        url: routeurl + 'php/returndata.php',
        success: function(data) {
            var arrdata = JSON.parse(data);
            var strhtml = '';
            for (var i = 0; i < arrdata.length; i++) {
                strhtml += `
                    <tr>
                        <td>${arrdata[i].sid}</td>
                        <td>${arrdata[i].title}</td>
                        <td>${arrdata[i].description}</td>
                        <td data-container="body" data-toggle="popover" data-placement="top" data-content="${arrdata[i].resolve}">${ellipsis(arrdata[i].resolve,15)}</td>
                        <td>${arrdata[i].date}</td>
                        <td style="text-align:center">
                            <button class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span>删除</button>
    
                            <a class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal-update"><span class="glyphicon glyphicon-edit"></span>修改</a>
                            
                        </td>
                    </tr>
                    `;
            }
            oTbody.innerHTML += strhtml;
            jQuery('[data-content]').popover();
        }
    });

    // 利用事件委托进行删除操作
    var sid = null;
    var oTitle_update = $("#title_update");
    var oDescription_update = $("#description_update");
    var oResolve_update = $("#resolve_update");
    var oBtn_update = $('#btn_update');
    oTbody.onclick = function(ev) {
            var ev = ev || window.event;
            var element = ev.target || ev.srcElement;
            if (element.nodeName == 'BUTTON') {
                if (confirm('你确定要删除吗?')) {
                    sid = element.parentNode.parentNode.querySelectorAll('td')[0].innerHTML;
                    ajax({
                        url: routeurl + 'php/delete.php',
                        data: {
                            faultid: sid,
                        }
                    })
                    $('tbody')[0].removeChild(element.parentNode.parentNode);
                }
            }

            // 利用事件委托进行数据修改
            else if (element.nodeName == 'A') {
                sid = element.parentNode.parentNode.querySelectorAll('td')[0].innerHTML;
                ajax({
                        url: routeurl + 'php/returnupdate.php',
                        data: {
                            updateid: sid,
                        },
                        success: function(data) {
                            var updadedata = JSON.parse(data);
                            oTitle_update.value = updadedata.title;
                            oDescription_update.value = updatedata.description;
                            oResolve_update.value = updatedata.resolve;
                        }
                    })
                    // 点击修改按钮，后端接受修改的数据，然后再返回该前端
                oBtn_update.onclick = function() {
                    var oTitleValue = oTitle_update.value;
                    var oDescriptionValue = oDescription_update.value;
                    var oResolveValue = oResolve_update.value;
                    if (oTitleValue != '' && oDescriptionValue != '') {
                        ajax({
                            type: 'post',
                            url: routeurl + 'php/getupdate.php',
                            data: {
                                updatesid: sid,
                                title: oTitleValue,
                                description: oDescriptionValue,
                                resolve: oResolveValue
                            },
                            success: function() {
                                location.reload(true);
                            }
                        });
                    } else {
                        alert('标题和问题描述不能为空');
                    }
                }
            }
        }
        // 点击解决问题框，将多余的字用省略号表示
    function ellipsis(str, len) {
        if (str.length > len) {
            return str.substring(0, len) + '....';
        } else {
            return str;
        }
    };

})();