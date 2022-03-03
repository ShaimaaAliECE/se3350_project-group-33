import { useState, useCallback, memo } from 'react';
import { ItemTypes } from './ItemTypes';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
const style = {
    height: '6rem',
    width: '6rem',
    marginRight: '5px',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
};

export const Container = memo(function Container({ shouldAccept }) {
    const [dustbins, setDustbins] = useState([
        { accepts: [ItemTypes.BOX], lastDroppedItem: null }
    ]);

    const [droppedBoxNames, setDroppedBoxNames] = useState([]);

    function isDropped(boxName) {
        return droppedBoxNames.indexOf(boxName) > -1;
    }
    const handleDrop = useCallback((index, item) => {
        const { name } = item;
        setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
        setDustbins(update(dustbins, {
            [index]: {
                lastDroppedItem: {
                    $set: item,
                },
            },
        }));
    }, [droppedBoxNames, dustbins]);

    const onDrop = (item) => handleDrop(0, item)

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: dustbins[0].accepts,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = isOver && canDrop;
    let backgroundColor = '#CBD5E1';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    return (
        <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                    <div key={index} ref={drop} className='flex justify-center items-center' role="Dustbin" style={{ ...style, backgroundColor }}>
                        {
                            lastDroppedItem && lastDroppedItem?.name == shouldAccept && `${shouldAccept}`}
                    </div>
                ))}
            </div>
        </div>);
});
