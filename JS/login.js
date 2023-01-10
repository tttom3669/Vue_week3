const url = "https://vue3-course-api.hexschool.io/v2";
const path = "tttom3669";
const app = {
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        //使用者登入驗證
        login() {
            axios.post(`${url}/admin/signin`, this.user).then((res) => {
                alert(res.data.message);
                const { token, expired } = res.data;
                // 把token和時效存在cookie中
                document.cookie = `myToken=${token}; expires=${new Date(expired)};`;
                window.location = 'products.html';
            }).catch((err) => {
                alert('帳號密碼錯誤，請重新輸入');
            });
        }
    },
}
Vue.createApp(app).mount('#app');