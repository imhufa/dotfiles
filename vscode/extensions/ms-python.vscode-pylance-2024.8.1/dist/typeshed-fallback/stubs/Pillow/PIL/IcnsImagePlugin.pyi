from _typeshed import Incomplete
from typing import ClassVar, Final, Literal

from ._imaging import _PixelAccessor
from .ImageFile import ImageFile

enable_jpeg2k: Incomplete
MAGIC: Final = b"icns"
HEADERSIZE: Final = 8

def nextheader(fobj): ...
def read_32t(fobj, start_length, size): ...
def read_32(fobj, start_length, size): ...
def read_mk(fobj, start_length, size): ...
def read_png_or_jpeg2000(fobj, start_length, size): ...

class IcnsFile:
    SIZES: Incomplete
    dct: Incomplete
    fobj: Incomplete
    def __init__(self, fobj) -> None: ...
    def itersizes(self): ...
    def bestsize(self): ...
    def dataforsize(self, size): ...
    def getimage(self, size: Incomplete | None = None): ...

class IcnsImageFile(ImageFile):
    format: ClassVar[Literal["ICNS"]]
    format_description: ClassVar[str]
    @property
    def size(self): ...
    @size.setter
    def size(self, value) -> None: ...
    best_size: Incomplete
    im: Incomplete
    def load(self) -> _PixelAccessor: ...
