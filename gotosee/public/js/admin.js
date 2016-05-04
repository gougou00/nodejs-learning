$(function() {
	// 获取所有删除按钮
	$('.del').click(function(e) {
		// 获取当前按钮
		var target = $(e.target)
		var id = target.data('id')
		// 拿到表格中的这一行
		var tr = $('.item-id-' + id)
		// 调用ajax
		$.ajax({
			type: 'DELETE',
			url: '/admin/list?id=' + id
		})
		.done(function(results) {
			if (results.success === 1) {
				if (tr.length > 0) {
					tr.remove()
				}
			}
		})
	})
})