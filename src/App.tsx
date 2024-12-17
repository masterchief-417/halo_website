
import './App.css'

function App() {

  return (
    <div className={"container min-vh-100 vw-100 d-flex align-items-center justify-content-center "}>
      <div className={"text-center"}>
      <h1 className={"display-1"}>Halo Tv</h1>
      <p>Watch over 3000 channels</p>
      <h3 className={"fw-bold"}>Subscribe</h3>
      <div className={"row gap-5 "}>
        <div className={"col-sm z_b"}>
          <h5>Zinc</h5>
          <p>1 month</p>
          <a href={"https://pay-link.s3.us-west-2.amazonaws.com/index.html?uid=f165caf55beb4279"} target={"_blank"}><button>Pay</button></a>

        </div>
        <div className={"col-sm s_b"}>
          <h5>Silver</h5>
          <p>2 months</p>
          <a href={"https://pay-link.s3.us-west-2.amazonaws.com/index.html?uid=43b43258ed114511"} target={"_blank"}>
            <button>Pay</button>
          </a>

        </div>
        <div className={"col-sm"}>
          <h5>Gold</h5>
          <p>6 months</p>
          <a href={"https://pay-link.s3.us-west-2.amazonaws.com/index.html?uid=fcafa8ff50e84b39"} target={"_blank"}>
            <button>Pay</button>
          </a>

        </div>
        <div className={"col-sm"}>
          <h5>Platinum</h5>
          <p>12 months</p>
          <a href={"https://pay-link.s3.us-west-2.amazonaws.com/index.html?uid=c1ea6920ebce4581"} target={"_blank"}>
            <button>Pay</button>
          </a>

        </div>
      </div>
        <div className={"mt-5"}>
          <small>Need your account to be activated?<br/> <a href={"mailto:streamhalo@proton.me"}>streamhalo@proton.me</a></small>
        </div>
      </div>

    </div>
  )
}

export default App
