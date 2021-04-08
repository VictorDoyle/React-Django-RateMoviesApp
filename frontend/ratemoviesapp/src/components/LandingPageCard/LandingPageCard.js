import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import '../../styles/LandingPageCard.css'


const LandingPageCard = (props) => (
    <div className="landingCardContainer">
        <Card className="landingPageCard">
            <Card.Content>
            <Card.Header>{props.content.title}</Card.Header>
            <Card.Description>
               {props.content.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name={props.content.icon} />
                {props.content.intent}
            </a>
            </Card.Content>
        </Card>
    </div>
)

export default LandingPageCard