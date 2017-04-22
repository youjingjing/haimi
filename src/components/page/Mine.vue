<template>
  	<div class="login">
    	<h2>请输入手机号码验证码直接登录</h2>
    	<div>
    		<form action="">
	    		<p>
		    		<label for="">手机号：</label><input type="text">
		    	</p>
		    	<p>
		    		<label for="">验证码：</label><input type="text">
		    		<a>发送验证码</a>
		    	</p>

		    	<button>登录</button>
	    	</form>
    	</div>
	    	
  	</div>
</template>
<style lang="scss">
	.login{
		h2{
			background: #fff9f3;
			color:#991f33;
			font-size: 12px;
			text-align: center;
			padding: 10px;
		}
		div{
			padding:0 10px;
			p{
				border-bottom: #ccc solid 1px;
				padding: 10px 0;
				margin-top: 10px;
				font-size: 12px;
				input{
					border: none;
					outline-color:#fff; 
				}
				a{
					color:#991f33;
					float: right;
				}
			}
			button{
				display: block;
				width: 100%;
				background:#991f33;
				color: #fff;
				border: none;
				font-size: 12px;
				padding: 10px 0;
				text-align: center;
				margin-top: 20px;
			}
		}
			
	}
</style>