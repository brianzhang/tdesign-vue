import Vue from 'vue';
import isFunction from 'lodash/isFunction';
import { ScopedSlotReturnValue } from 'vue/types/vnode';
import { CheckIcon as TdCheckIcon, CloseIcon as TdCloseIcon } from 'tdesign-icons-vue';

import mixins from '../utils/mixins';
import getConfigReceiverMixins, { StepsConfig, getGlobalIconMixins } from '../config-provider/config-receiver';
import { prefix } from '../config';
import props from './step-item-props';
import { renderTNodeJSX, renderContent } from '../utils/render-tnode';
import Steps from './steps';
import { ClassName } from '../common';

const name = `${prefix}-steps-item`;

export type StepInstance = InstanceType<typeof Steps>;

export interface StepItemType extends Vue {
  steps: StepInstance;
}

export default mixins(getConfigReceiverMixins<StepItemType, StepsConfig>('steps'), getGlobalIconMixins()).extend({
  name: 'TStepItem',
  props: {
    ...props,
    index: Number,
  },
  inject: {
    steps: { default: undefined },
  },
  computed: {
    current(): string | number {
      return this.steps && this.steps.current;
    },
    baseClass(): ClassName {
      return [name, { [`${name}--${this.status}`]: this.status }];
    },
    iconClass(): ClassName {
      return [`${name}__icon`, { [`${name}--${this.status}`]: this.status }];
    },
    canClick(): boolean {
      return this.status !== 'process' && !this.steps?.readonly;
    },
  },
  methods: {
    renderIcon() {
      let defaultIcon;
      if (this.steps.theme === 'default') {
        let icon: ScopedSlotReturnValue = '';
        const { CheckIcon, CloseIcon } = this.useGlobalIcon({ CheckIcon: TdCheckIcon, CloseIcon: TdCloseIcon });
        switch (this.status) {
          case 'finish':
            icon = <CheckIcon />;
            break;
          case 'error':
            if (isFunction(this.global.errorIcon)) {
              icon = this.global.errorIcon(this.$createElement);
            } else {
              icon = <CloseIcon />;
            }
            break;
          // default 包含 case 'process' 的情况
          default:
            icon = String(this.index + 1);
            break;
        }
        defaultIcon = <span class={`${name}__icon--number`}>{icon}</span>;
      }
      return renderTNodeJSX(this, 'icon', defaultIcon);
    },
    onStepClick(e: MouseEvent) {
      if (!this.canClick) return;
      const val = this.value === undefined ? this.index : this.value;
      this.steps.handleChange(val, this.current, e);
    },
  },
  render() {
    const content = renderContent(this, 'default', 'content');
    return (
      <div class={this.baseClass}>
        <div class={`${name}__inner ${this.canClick ? `${name}--clickable` : ''}`} onClick={this.onStepClick}>
          <div class={this.iconClass}>{this.renderIcon()}</div>
          <div class={`${name}__content`}>
            <div class={`${name}__title`}>{renderTNodeJSX(this, 'title')}</div>
            <div class={`${name}__description`}>{content}</div>
            <div class={`${name}__extra`}>{renderTNodeJSX(this, 'extra')}</div>
          </div>
        </div>
      </div>
    );
  },
});
