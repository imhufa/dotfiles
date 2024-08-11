from _typeshed import Incomplete
from typing import Any

class Prefix:
    bucket: Any
    name: Any
    def __init__(self, bucket: Incomplete | None = None, name: Incomplete | None = None) -> None: ...
    def startElement(self, name, attrs, connection): ...
    def endElement(self, name, value, connection): ...
    @property
    def provider(self): ...
