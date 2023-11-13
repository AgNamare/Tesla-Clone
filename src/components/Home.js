import React from 'react'
import styled from 'styled-components'
import Section from "./Section"


function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Online for touchless Delivery"
          backgroundImg = "model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing iventory"
        />
        <Section 
          title="Model Y"
          description="Order Online for touchless Delivery"
          backgroundImg = "model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing iventory"
        />
        <Section 
          title="Model 3"
          description="Order Online for touchless Delivery"
          backgroundImg = "model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing iventory"
        />
        <Section 
          title="Model X"
          description="Order Online for touchless Delivery"
          backgroundImg = "model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing iventory"
        />
        <Section 
          title="Lower Cost Solar Panels in America"
          description="Money back guarantee"
          backgroundImg = "solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn More"
        />
        <Section 
          title="Solar for New Roofs"
          description="Solar Roof costs less than a new Roof"
          backgroundImg = "solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn More"
        />
        <Section 
          title="Accessories"
          backgroundImg = "accessories.jpg"
          leftBtnText="Shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
`