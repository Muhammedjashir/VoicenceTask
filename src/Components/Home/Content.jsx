import React from "react";

function Card({ img, title, description }) {
  return (
    <div className="flex  justify-between rounded shadow-2xl items-center p-6">
      <img className="w-[67.34px] h-[59px]" src={img} alt={title} />
      <div className="w-[270px] h-[110px]">
        <h1 className="mb-1 font-medium text-xl text-[rgb(52,63,82)] mt-7">
          {title}
        </h1>
        <p className="break-words overflow-hidden text-ellipsis text-[rgb(52,63,82)]">
          {description}
        </p>
      </div>
    </div>
  );
}

function Product({ img, title }) {
  return (
    <div className="w-[380px] h-[550px] flex flex-col">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={img}
        alt={title}
      />
      <h1 className="flex justify-center font-medium p-5 text-2xl text-[rgb(52,63,82)]">
        {title}
      </h1>
    </div>
  );
}

function Content() {
  return (
    <>
      <div>
        <h1 className="text-center m-15 font-medium text-4xl">
          Here are a few reasons why our
          <br />
          customers choose ios.
        </h1>

        <div className="flex flex-wrap justify-center gap-3 p-5">
          <Card
            img="https://s3-alpha-sig.figma.com/img/b2f0/1dc7/22d518e4ee45053bfa283c1ca2b852aa?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O1WI9pWbXZ6-oV6~raaVvPd~fj1dm4K-klJQ4BTlZoJkRJDhLn~ktZnOHPREiz151w1UALm69rVAcD-G12-0WbyE4r1F~B8Z4PmfxIKpsW3dgLbgbjDafw-hEj2tkNF2vEUm1QrmucEGlaaurt~pY4mh7yjKHBlO2OIkIqYdCW5ATtpMlrHZX8jnAc-HHmt1LqB1fa2kzULUkKa6JnQ~0c7B95CYTZSEp51ND-R3Zr-hqUukEYSCHINWMMbozoAZNVe3a0fOrSInTZXG33VWb93NB0b9od6idLlGoEOhXdoIaSipXm5PBTZ6XUfy8Fl-HpgokGW38T4cJ-~SbaML2A__"
            title="Beds"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Card
            img="https://s3-alpha-sig.figma.com/img/6b8e/e77a/45cfde76dfe0d278b934d91c92b25a5a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FW7MwxHnkQvC-kFMYx1TlaNT~yGsTbw2LLSpmnvJzkGBigSHLlej-P~5ug9VqCkjo2JXntqVR0gHhKX5WCSJ7udxC-hilBvH2UcfW7TL8~f34uiKKv~T~mh2R4RFgJGXfi999M0u05rMdd4NhdNRrGGxJ8EOEBC22rWVT-dWyfnZD8tJDKKf7pFFlhZJ-dRmkaNfD8baVaXqfFFAGpqB2kwDzBOlWy-akrJZ1q7uM6~Ej8e1tahV64ThncsYJieKSZ~xKlfYJFJawou06oVJcOuiNwL27FVhVYqXsv-4e-5K0X9imsNLoxIR1utB~gHKyzpQQDQWQnx0Fwx4csgeIQ__"
            title="Sofa"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Card
            img="https://s3-alpha-sig.figma.com/img/c660/d5a9/1c239c200514a17025c6d7dfda9b9c0c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B9~uPxguHFjFVsQukdZKuc0yLU83OzDcN1vfMSRSJVGCPFH6O8RYpwSOQj0rDDKge4570dL6kLTkuqm3qLO016M~-eZliVjSrtC6M3jBvpPTKHdaMBdRmz5pt7tMMynLSpHVzVqf4iSALdMry3PPYHO9ay9WUY6Q40jxpeWySzmP1FBMvaRilkImXrCNI3Ni~LmFd5na~JRdfI8-InYtwVtncB3Y-JCaKmVwKFupWRc6LB0pv2XAmbUK3G4HW~jATeSInT7UaeDxYFQ8cYNAIcQCoII5Bau1kUeJiccp~caEHVKE1taWL0eNrtR4AsACJA3erqbkDenwEqZKQJPzSA__"
            title="Lamb"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>

        <div className="">
          <h1 className="text-center p-7 text-4xl font-bold">
            Browse The Range
          </h1>
          <p className="text-center text-[rgb(52,63,82)] text-2xl font-medium mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <Product
            img="https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EVr090de4whRjYEAIlkDAOUM5Vs0kFzgpNv5Ikg08ol3WOyogFkXp0i-3QCyElr7szOHIQnH3ZZXk1xVTUNUfOfJDWm~vBPDtDt4PW7FTSfqkPBp1AljewKT-ZiZhKJW9hRq~0-89oZ7tZB1rIxnAlLM3RX-zwJugWaFtYETervk68p3U9x7d5tqIQ8I7p8x~2Sc8nkAppl1hRrFta85u-e1GFxGCkk9obnIj~5EKw~kKCiiJ9yTsrZnIfeMvPmtA6ODiLoXNohHxIOAVMLLh2aYKbXt9pGnpjgXbxQeYH7T~mn1egC25sIuJVELSA1M~hZp3gp4jGo0nQXcjGx1qA__"
            title="Dining"
          />
          <Product
            img="https://s3-alpha-sig.figma.com/img/b7e3/92a7/f3961ca2b1edab00f7a7640b3c2ed666?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kiv4EKrYQrFcyPUb7cQw19airmIJ9LmWet9T2l3thXFiYMLJLv-K80rc8YvpkCbcDwcny8N8JnbWZUDWqn1fLzpGdje~ym-OcMQUH0ktt3oxCvQmDrBAfVzJezyAf5pyOq7XIZP6l5Jyjf8UL83ryE3wwHtWQ1VfjtuXdKMmTn436mWoepXyIHpQpjG~LbaVEIs8MR2fL3HxxbZhw73Twny50UAMYNAg1sECDCx6OR9A00a2upBOoFeHNASmuskKiCw45N3WAZNvNcDBu8GDS586d8PmAE6tPnuq~RdXUeAbIZz975Ua6fvacXmOHJUgYx8n1porTvl~lh2uOIL4Wg__"
            title="Living"
          />
          <Product
            img="https://s3-alpha-sig.figma.com/img/77e4/946e/ec6e291e21c9694ce22e6c5b50d777fe?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ek-sMcpcWjVpJFQ6x3o0q9MiryzT9L4FDqQ-M4O7XjDNBwE4bUQMirf4~2mB0J~Xc54AmeGGuR0PUAtFnK0fUXEwqnP0hNwD713czJQt-hhTfmPC9-WfkRg6qZI-~6QJ-XPA7Gox8TUdKy95u56dW-vqGbYoBxIafoZWrHB~kr5qJxIczGUmy~zFjlo0SiKbBSVWz7aDBUB9DWmljwXGs4iKVQ2tg-j-Z8Dn4JlqUoFLrQzuxBTYGLT40ra3VSE5gaEbP~4G1D-sMYTbL6snzy9hdOoQTBxflDqdYf8I5NmwtQhsGKs57fWfWG1DsvBsCi-uxR5PW0dXONvhtoQwYw__"
            title="Bedroom"
          />
        </div>
      </div>

      <div className="bg-red-100 w-full h-[500px] flex justify-between items-center mt-10 rounded-3xl">
        <div className="ml-40">
          <h1 className="text-gray-400 font-medium mb-8">END OF SEASON SALE</h1>
          <h1 className="text-4xl font-semibold mb-10 text-gray-800">
            Up To 60% Off
          </h1>
          <p className="text-gray-600 font-medium">
            We bring solutions to make life
            <br />
            easier for our customers
          </p>
        </div>
        <div className="w-[850px] h-[400px] mt-25">
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/1b0e/928b/a30baf2924d2d5cd10cd8f198d8723ef?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SOIXGWj~7aiYIcJJrbDwEeZPb2CbTrz~NO8XEOn~-V7AIJDbxvlk8Yprz3evOuwCM3Bgq71GDaDmVQYdD4Nt5JCzBBgX7vYPQj-V8MHzk2mzGa5ZZmb14xO36RJvArc7ZC8FbBFIpAUvPTNkUtehqgnLWLvLi6yZQE1b0uN2J3GS48Zp3hktqexnya6Wdo0JYAmraUt71kdEKGOFmUu4V6HYpY~sXVsHOWNsaBP1zYZpdDfMKzlWC71n0tSQLujNwaWolGwDki9EVMra~FkUp6wgY4mfCnd9rvkmhgndEutLI2Q-fx-oduquiIwAY9gQS7l4nIMROXky1WREzE0WVQ__"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Content;
