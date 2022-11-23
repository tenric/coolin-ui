import type { Plugin } from "vue";
export declare type SFCWithInstall<T> = T & Plugin;
declare const Button: SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    disabled: BooleanConstructor;
    icon: StringConstructor;
    iconPosition: StringConstructor;
    size: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
}, {
    styleClass: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        'is-plain': boolean;
        'is-round': boolean;
        'is-disabled': boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    plain: BooleanConstructor;
    round: BooleanConstructor;
    disabled: BooleanConstructor;
    icon: StringConstructor;
    iconPosition: StringConstructor;
    size: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
}>>, {
    plain: boolean;
    round: boolean;
    disabled: boolean;
}>>;
export default Button;
