import ProductCart from "@/components/screen/Cart/ProductCart";
import React from "react";
import {Helmet} from "react-helmet";

const cart = () => {
    return (
        <div>
            <Helmet>
                <title>DailyBuy - Cart</title>
                <meta charSet="utf-8" name="description" content="DailyBuy FAQ Page"/>
            </Helmet>
            <ProductCart/>
        </div>
    );
};

export default cart;
