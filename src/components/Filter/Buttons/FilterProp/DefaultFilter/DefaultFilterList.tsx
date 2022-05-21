import { TDefautlFilterProps } from "./DefaultFilter"
import DefaultFilterElement from "./DefaultFilterElement";

export default function DefaultFilterList(props: TDefautlFilterProps) {

    const type = props.type;
    const data = props.data;




    return (<>
        {Array.isArray(data) ?
            <>
                {data.map(e => {
                    return (
                        <DefaultFilterElement key={type + e} value={e} type={type} />
                    )
                })}
            </>
            :
            <></>

        }
    </>)
}

