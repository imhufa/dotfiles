"""
This type stub file was generated by pyright.
"""

"""
Async helper function that are invalid syntax on Python 3.5 and below.

This code is best effort, and may have edge cases not behaving as expected. In
particular it contain a number of heuristics to detect whether code is
effectively async and need to run in an event loop or not.

Some constructs (like top-level `return`, or `yield`) are taken care of
explicitly to actually raise a SyntaxError and stay as close as possible to
Python semantics.
"""
_asyncio_event_loop = ...
def get_asyncio_loop(): # -> None:
    """asyncio has deprecated get_event_loop

    Replicate it here, with our desired semantics:

    - always returns a valid, not-closed loop
    - not thread-local like asyncio's,
      because we only want one loop for IPython
    - if called from inside a coroutine (e.g. in ipykernel),
      return the running loop

    .. versionadded:: 8.0
    """
    ...

class _AsyncIORunner:
    def __call__(self, coro):
        """
        Handler for asyncio autoawait
        """
        ...
    
    def __str__(self) -> str:
        ...
    


_asyncio_runner = ...
class _AsyncIOProxy:
    """Proxy-object for an asyncio

    Any coroutine methods will be wrapped in event_loop.run_
    """
    def __init__(self, obj, event_loop) -> None:
        ...
    
    def __repr__(self):
        ...
    
    def __getattr__(self, key): # -> (*args: Unknown, **kwargs: Unknown) -> (Future | Unknown):
        ...
    
    def __dir__(self):
        ...
    


