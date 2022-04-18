import Cookies from 'js-cookie'

function Register() {
    window.onload = (e) => {
        if (Cookies.get("login") == "true") {
           window.location.href = "/trials";
        }
     };

    function loginLink() {
        window.location.href = "/login";
    }
    async function RegisterAcc(event) {
        event.target.disabled = true;
        var buttonTextBox = document.getElementById("buttonText");
        var LoadingICON = document.getElementById("LoadingICON");
        var SuccessNotification = document.getElementById("notification-success")
        var FailedNotification = document.getElementById("notification-error")
        buttonTextBox.style.display = "none";
        LoadingICON.style.display = "block";
        SuccessNotification.style.display = "none";
        FailedNotification.style.display = "none";

        var FullNameTXT = document.getElementById("name")
        var emailTXT = document.getElementById("email")
        var passwordTXT = document.getElementById("password")
        if (FullNameTXT.value == "" || emailTXT.value == "" || passwordTXT.value == "") {
            FailedNotification.style.display = "block";
            buttonTextBox.style.display = "block";
            LoadingICON.style.display = "none";
            return;
        }

        try {
            await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/checkemail?emailTXT=${encodeURIComponent(emailTXT.value)}`, {
                "headers": {
                    "accept-language": "en-US,en;q=0.9",
                    "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
                },
                "body": null,
                "method": "GET"
            }).then(e => {
                return e.json();
            }).then(async (e) => {
                if (e.results[1]['(SV.size())'] == 0) {
                    await fetch(`https://cors-anyhere.herokuapp.com/https://wavedata.i.tgcloud.io:14240/restpp/query/WaveData/CreateAccount?FullNameTXT=${encodeURIComponent(FullNameTXT.value)}&emailTXT=${encodeURIComponent(emailTXT.value)}&passwordTXT=${encodeURIComponent(passwordTXT.value)}`, {
                        "headers": {
                            "accept-language": "en-US,en;q=0.9",
                            "Authorization": "Bearer h6t28nnpr3e58pdm1c1miiei4kdcejuv",
                        },
                        "body": null,
                        "method": "GET"
                    }).then(e => {
                        SuccessNotification.style.display = "block";
                        window.location.href = "/login"
                    }).catch((error) => {
                        buttonTextBox.style.display = "block";
                        FailedNotification.style.display = "none";
                    });
                } else { //Error
                    LoadingICON.style.display = "none";
                    buttonTextBox.style.display = "block";
                    FailedNotification.innerText = "Email already registered!"
                    FailedNotification.style.display = "block";
                    event.target.disabled = false;
                    return;
                }
            })


        } catch (error) {
            LoadingICON.style.display = "none";
            buttonTextBox.style.display = "block";
            FailedNotification.style.display = "none";
            FailedNotification.innerText = "Error! Please try again!"
        }

        event.target.disabled = false;
    }
    return (
        <div className="min-h-screen grid-cols-2 flex">
            <div className="bg-blue-200 flex-1">
                <img src={require('../assets/login-picture.png')} className="h-full" alt="WaveData Logo" />
            </div>
            <div className="bg-white flex-1 flex flex-col justify-center items-center">
                <div className="pl-20 pr-20">
                    <img src={require('../assets/wave-data-logo.png')} className="w-3/4 mx-auto" alt="WaveData Logo" />
                    <h1 className="text-4xl font-semibold mt-10">Register your account</h1>
                    <div id='notification-success' style={{ display: 'none' }} class="mt-4 text-center bg-gray-200 relative text-gray-500 py-3 px-3 rounded-lg">
                        Success!
                    </div>
                    <div id='notification-error' style={{ display: 'none' }} class="mt-4 text-center bg-red-200 relative text-red-600 py-3 px-3 rounded-lg">
                        Error! Please try again!
                    </div>
                    <div className="mt-10">
                        <label className="flex flex-col font-semibold">
                            Full name
                            <input type="name" required id="name" name="name" className="mt-2 h-10 border border-gray-200 rounded-md outline-none px-2 focus:border-gray-400" />
                        </label>
                        <label className="flex flex-col font-semibold">
                            Email
                            <input type="email" required id="email" name="email" className="mt-2 h-10 border border-gray-200 rounded-md outline-none px-2 focus:border-gray-400" />
                        </label>
                        <label className="flex flex-col font-semibold mt-3">
                            Password
                            <input type="password" required id="password" name="password" className="mt-2 h-10 border border-gray-200 rounded-md outline-none px-2 focus:border-gray-400" />
                        </label>
                        <label className="flex flex-col font-semibold mt-3">
                            Repeat password
                            <input type='password' name="confirm-password" required className="mt-2 h-10 border border-gray-200 rounded-md outline-none px-2 focus:border-gray-400" />
                        </label>
                        <button onClick={RegisterAcc} className="bg-orange-500 text-white rounded-md shadow-md h-10 w-full mt-3 hover:bg-orange-600 transition-colors overflow:hidden flex content-center items-center justify-center cursor-pointer">
                            <i id='LoadingICON' style={{ display: "none" }} class="select-none block w-12 m-0 fa fa-circle-o-notch fa-spin"></i>
                            <span id='buttonText'>Register</span>
                        </button>

                        <button onClick={loginLink} className="bg-gray-200 text-gray-500 rounded-md shadow-md h-10 w-full mt-3 hover:bg-black hover:text-white transition-colors">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
