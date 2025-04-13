import Herotext from "../ui/Herotext";
import Button from "../ui/Button";
import SocialMedia from "../ui/SocialMedia";

function Hero ({text}) {
    return (
        <div className="text-center z-30">
            <SocialMedia />
            <Herotext text = {text} />
            <Button buttonText = "Contact us" backgroundColor="bg-transparent" textColor = "text-white"/>
        </div>
    )
}
export default Hero;