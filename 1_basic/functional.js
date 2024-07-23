
function test () {
  return () => {
    return () => {

    }
  }
}


// Pipe
test()()();