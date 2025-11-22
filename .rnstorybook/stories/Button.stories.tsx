import type {Meta, StoryObj} from '@storybook/react-native';

import {View} from 'react-native';
import {fn} from 'storybook/test';

import {Button} from './Button';

/**
 * No component found for view with name "RCTModalHostView"

-[RCTUIManager createView:viewName:rootTag:props:]
    RCTUIManager.mm:990
__invoking___
-[NSInvocation invoke]
-[NSInvocation invokeWithTarget:]
-[RCTModuleMethod invokeWithBridge:module:arguments:]
facebook::react::invokeInner(RCTBridge*, RCTModuleData*, unsigned int, folly::dynamic const&, int, (anonymous namespace)::SchedulingContext)
facebook::react::RCTNativeModule::invoke(unsigned int, folly::dynamic&&, int)::$_0::operator()() const
invocation function for block in facebook::react::RCTNativeModule::invoke(unsigned int, folly::dynamic&&, int)
_dispatch_call_block_and_release
_dispatch_client_callout
_dispatch_lane_serial_drain
_dispatch_lane_invoke
_dispatch_root_queue_drain_deferred_wlh
_dispatch_workloop_worker_thread
_pthread_wqthread
start_wqthread

 */

const meta = {
  title: 'Example/Button',
  component: Button,
  decorators: [
    Story => (
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <Story />
      </View>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: {onPress: fn(), size: 'medium'},
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
    primary: {
      control: {
        type: 'boolean',
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
      // options: ['red', 'green', 'blue'],
    },
    label: {
      control: {
        type: 'text',
      },
    },
    onPress: {
      action: 'onPress',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
