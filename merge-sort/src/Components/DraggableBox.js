import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
const style = {
    backgroundColor: '#CBD5E1',
    cursor: 'move',
    width: '80px',
    height: '80px'
};

export const Box = function Box({ name }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));
    const opacity = isDragging ? 0.4 : 1;

    return (
        <div className='flex justify-center items-center' ref={drag} role="Box" style={{ ...style, opacity }} data-testid={`box-${name}`}>
            {name}
        </div>
    );
};
