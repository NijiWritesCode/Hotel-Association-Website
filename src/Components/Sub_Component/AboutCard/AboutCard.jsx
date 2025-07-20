import { React } from 'react'
import './AboutCard.css'

const AboutCard = ({topic, desc}) => {

    return(
        <div className="about_card">

            <h2>
                {topic}
            </h2>

            <p>
                {desc}
            </p>

        </div>
    )
}

export default AboutCard