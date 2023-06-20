// import React, { useState } from 'react';


// type BaseProps = {
//     primTitle: string,
//     secTitle?: string,
// }

// type InjectedProps = {
//     toggleStatus: Boolean,
//     toggle: () => void,
// }


// const Button = ({ primeTitle, secTitle, toggle, toggleStatus }: any) => (
//     <button onClick={toggle}>
//         {toggleStatus ? primeTitle : secTitle}
//     </button>
// )

// const withToggle = <BaseProps extends InjectedProps = InjectedProps>(PassedComponent: React.ComponentType<BaseProps>) => {
//     return (props: BaseProps) => {
//         const [toggleStatus, toggle] = useState(false)
//         return (
//             <PassedComponent
//                 {...props as BaseProps}
//                 toggle={() => toggle(!toggleStatus)}
//                 toggleStatus={toggleStatus}
//             />
//         )
//     }
// }
// const ToogleButton = withToggle(Button);

// export default <ToogleButton primTitle="Maint Title" secTitle="Additional Title"/>


import React, { FC, useState } from "react";


// interface WithLoadingProps {
//     loading: Boolean
// }

// const WithLoading = <P extends object>(Component: React.ComponentType<P>) => {

//     class WithLoading extends React.Component<P & WithLoadingProps> {
//         render() {
//             const { loading, ...props } = this.props
//             return loading ? <LoadingSpinner /> : <Component {...props as P} />
//         }
//     }
// }


type BaseProps = {
    primTitle: string;
    secTitle?: string;
};

type InjectedProps = {
    toggleStatus: Boolean;
    toggle: () => void;
};

const Button: FC<BaseProps & InjectedProps> = ({ primTitle, secTitle, toggle, toggleStatus }) => {
    return <button onClick={toggle}>{toggleStatus ? primTitle : secTitle}</button>;
};

const withToggle = function <T>(PassedComponent: FC<T & InjectedProps>) {
    return (props: T) => {
        const [toggleStatus, toggle] = useState(false);
        return (
            <PassedComponent
                {...props}
                toggle={() => toggle(!toggleStatus)}
                toggleStatus={toggleStatus}
            />
        );
    };
};
const ToggleButton = withToggle<BaseProps>(Button);

export default <ToggleButton primTitle="Maint Title" secTitle="Additional Title" />;


