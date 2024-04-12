import { NumericInput, Position, Tooltip } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import React from 'react';

type ControlBarHeapSizeProps = DispatchProps & StateProps;

type DispatchProps = {
  handleChangeHeapSize?: (execTime: number) => void;
};

type StateProps = {
  heapSize?: number;
  key: string;
};

export const ControlBarHeapSize: React.FC<ControlBarHeapSizeProps> = props => {
  return (
    <Tooltip content="Heap Size (bytes)" placement={Position.TOP}>
      <NumericInput
        leftIcon={IconNames.ArrowsHorizontal}
        style={{ width: 100 }}
        max={Math.pow(2, 31)} // 2.14GB
        value={props.heapSize}
        minorStepSize={null}
        intent="primary"
        onValueChange={props.handleChangeHeapSize}
      />
    </Tooltip>
  );
};
