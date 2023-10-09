import { Typography } from 'antd'

const { Title } = Typography

const ItemListContainer = ({ gretting }) => {
    return (
        <div>
            <Title level={3}>{gretting}</Title>
        </div>
    )
}

export default ItemListContainer