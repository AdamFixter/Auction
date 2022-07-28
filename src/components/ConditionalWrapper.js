import PropTypes from 'prop-types';

function ConditionalWrapper({condition, wrapper, children}) {
    const Wrapper = wrapper;
    return condition ? <Wrapper>{children}</Wrapper> : children;
}

ConditionalWrapper.propTypes = {
    condition: PropTypes.any,
    wrapper: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.elementType
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default ConditionalWrapper;