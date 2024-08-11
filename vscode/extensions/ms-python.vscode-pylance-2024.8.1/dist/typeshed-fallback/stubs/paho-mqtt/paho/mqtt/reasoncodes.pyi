class ReasonCodes:
    packetType: int
    names: dict[int, dict[str, list[int]]]
    value: int
    def __init__(self, packetType: int, aName: str = "Success", identifier: int = -1) -> None: ...
    def __getName__(self, packetType: int, identifier: int) -> str: ...
    def getId(self, name: str) -> int: ...
    def set(self, name: str) -> None: ...
    def unpack(self, buffer: bytearray) -> int: ...
    def getName(self) -> str: ...
    def __eq__(self, other: object) -> bool: ...
    def json(self) -> str: ...
    def pack(self) -> bytearray: ...
