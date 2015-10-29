var firstClassfyCtrl = {
    init: function (e) {
        // 顶部导航
        var html = "<div class='navbar-inner'><div class='left' id='firstClassfyBack'><i style='color: #FFFFFF;' class='icon'></i></div><div class='center'>所有分类"
                +"</div><div class='right'><a class='link link-u' style='color: #FFFFFF;'></a></div></div>";
        $$('#firstClassfyNavbar').html(html);
        // 商品一级分类
        uzu.rest.getJSON("goods/findClassify", function (data) {
            // 渲染模板
            var context = {};
            context.classifyList = data.classifyList;
            var productDetailTemplate = $$('#category_wapperTpl').html();
            var compiledproductDetailTemplate = Template7.compile(productDetailTemplate);
            var html = compiledproductDetailTemplate(context);
            $$('#category_wapper').html(html);
            // 商品二级分类
            var pageContainer = $$(e.detail.page.container);
            pageContainer.find('.category-list').on('click', function (e) {
                var link = $$(e.target);
                var list = link.parents('ul');
                list.children('li').removeClass('cur');
                link.parent('li').addClass('cur');
                var id = link.dataset()['id'];
                uzu.rest.getJSON("goods/findClassify", { 'parent_id': id }, function (datas) {
                    debugger;
                    // 渲染模板
                    var context1 = {};
                    context1.lsChildClass = datas.classifyList;
                    var lsChildClassTemplate = $$('#categoryTemplate').html();
                    var compiledLsChildClassTemplate = Template7.compile(lsChildClassTemplate);
                    var lsChildClassHtml = compiledLsChildClassTemplate(context1);
                    $$('.category-content').html(lsChildClassHtml);
                });
            });
        });
    }
};

