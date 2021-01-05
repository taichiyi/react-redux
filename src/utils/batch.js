// Default to a dummy "batch" implementation that just runs the callback
// 默认为仅运行回调的虚拟“批处理”实现
function defaultNoopBatch(callback) {
  callback()
}

let batch = defaultNoopBatch

// Allow injecting another batching function later
export const setBatch = newBatch => (batch = newBatch)

// Supply a getter just to skip dealing with ESM bindings
export const getBatch = () => batch
