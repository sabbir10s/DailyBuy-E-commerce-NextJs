import React, {useEffect, useState} from "react";
import ProcessingSteps from "../../components/screen/ProcessingSteps";
import axios from "axios";
import {useRouter} from "next/router";
import {Helmet} from "react-helmet";
import ThemeSuspense from "@/components/theme/ThemeSuspense";
import TopSection from "./TopSection";
import ProductDescription from "./ProductDescription";
import RelatedProduct from "./RelatedProduct";

const ProductDetails = () => {
    const [productData,
        setProductData] = useState([]);
    const router = useRouter()
    const {pid} = router.query
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const productInfo = productData.find((product) => product._id === parseInt(pid));

    const fetchData = () => {
        axios
            .get("/products.json")
            .then((response) => {
                setProductData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        fetchData();
    }, [pid]);

    if (!productInfo) {
        return <ThemeSuspense/>;
    }

    return (
        <div className="mt-20 lg:mt-0">
            <Helmet>
                <title>DailyBuy - Product Details</title>
                <meta
                    charSet="utf-8"
                    name="description"
                    content="DailyBuy Product Details Page"/>
            </Helmet>
            <div className="container mt-0 md:mt-[30px]">
                <TopSection productInfo={productInfo}/>
                <ProductDescription productInfo={productInfo}/>
            </div>

            {/* Related Product */}
            <RelatedProduct productData={productData}/>
            <ProcessingSteps/>
        </div>
    );
};

export default ProductDetails;
