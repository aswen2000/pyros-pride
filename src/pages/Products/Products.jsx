import Product from "../../components/product/Product";
// import facebookLogo from '../../images/f_logo_RGB-Blue_58.png'
import PPSh from "../../images/PPSh-41_from_soviet.jpg"

const Products = () => {

    return (
        <div>
            <div className="product_card">
                <Product
                    product_name={"Arbitrary Example"}
                    product_number={"PP-SH41"} 
                    description={"This is an example of a description, it has great pops and bangs really quickly"}
                    image={PPSh}
                    link={"FAIyQ5yqVu8"}/>
            </div>
        </div>

    );
}

export default Products;