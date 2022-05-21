
export default function ProductInfoParamsElement(props: { type: string, value: string }) {


    return (
        <div className="product__params-element">
            <p>
                {props.type}
            </p>
            <p>
                {props.value}
            </p>
        </div>)
}