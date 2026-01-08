import "./Footer.css"


type PropsType={
    viewCart: boolean,
}
const Footer = ({viewCart}: PropsType) => {
  

    const year: number = new Date().getFullYear()
    const pageContent = viewCart
    ?<p>Shopping Cart</p>
    :(
        <>
        <p>Serendib &copy; {year}</p>
        </>
    )

    const content = (
       <footer className="footer">
        {pageContent}
       </footer> 
    )
    return content
}


export default Footer