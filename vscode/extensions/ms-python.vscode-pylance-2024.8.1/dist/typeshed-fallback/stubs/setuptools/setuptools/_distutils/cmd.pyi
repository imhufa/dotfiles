from _typeshed import BytesPath, Incomplete, StrOrBytesPath, StrPath, Unused
from abc import abstractmethod
from collections.abc import Callable, Iterable
from typing import Any, ClassVar, TypeVar, overload

from .dist import Distribution

_StrPathT = TypeVar("_StrPathT", bound=StrPath)
_BytesPathT = TypeVar("_BytesPathT", bound=BytesPath)

class Command:
    distribution: Distribution
    # Any to work around variance issues
    sub_commands: ClassVar[list[tuple[str, Callable[[Any], bool] | None]]]
    def __init__(self, dist: Distribution) -> None: ...
    def ensure_finalized(self) -> None: ...
    @abstractmethod
    def initialize_options(self) -> None: ...
    @abstractmethod
    def finalize_options(self) -> None: ...
    @abstractmethod
    def run(self) -> None: ...
    def announce(self, msg: str, level: int = ...) -> None: ...
    def debug_print(self, msg: str) -> None: ...
    def ensure_string(self, option: str, default: str | None = ...) -> None: ...
    def ensure_string_list(self, option: str | list[str]) -> None: ...
    def ensure_filename(self, option: str) -> None: ...
    def ensure_dirname(self, option: str) -> None: ...
    def get_command_name(self) -> str: ...
    def set_undefined_options(self, src_cmd: str, *option_pairs: tuple[str, str]) -> None: ...
    def get_finalized_command(self, command: str, create: bool = True) -> Command: ...
    def reinitialize_command(self, command: Command | str, reinit_subcommands: bool = False) -> Command: ...
    def run_command(self, command: str) -> None: ...
    def get_sub_commands(self) -> list[str]: ...
    def warn(self, msg: str) -> None: ...
    def execute(
        self, func: Callable[..., object], args: Iterable[Incomplete], msg: str | None = ..., level: int = ...
    ) -> None: ...
    def mkpath(self, name: str, mode: int = ...) -> None: ...
    @overload
    def copy_file(
        self,
        infile: StrPath,
        outfile: _StrPathT,
        preserve_mode: bool = True,
        preserve_times: bool = True,
        link: str | None = None,
        level: Unused = 1,
    ) -> tuple[_StrPathT | str, bool]: ...
    @overload
    def copy_file(
        self,
        infile: BytesPath,
        outfile: _BytesPathT,
        preserve_mode: bool = True,
        preserve_times: bool = True,
        link: str | None = None,
        level: Unused = 1,
    ) -> tuple[_BytesPathT | bytes, bool]: ...
    def copy_tree(
        self,
        infile: StrPath,
        outfile: str,
        preserve_mode: bool = True,
        preserve_times: bool = True,
        preserve_symlinks: bool = False,
        level: Unused = 1,
    ) -> list[str]: ...
    @overload
    def move_file(self, src: StrPath, dst: _StrPathT, level: Unused = 1) -> _StrPathT | str: ...
    @overload
    def move_file(self, src: BytesPath, dst: _BytesPathT, level: Unused = 1) -> _BytesPathT | bytes: ...
    def spawn(self, cmd: Iterable[str], search_path: bool = True, level: Unused = 1) -> None: ...
    @overload
    def make_archive(
        self,
        base_name: str,
        format: str,
        root_dir: StrOrBytesPath | None = None,
        base_dir: str | None = None,
        owner: str | None = None,
        group: str | None = None,
    ) -> str: ...
    @overload
    def make_archive(
        self,
        base_name: StrPath,
        format: str,
        root_dir: StrOrBytesPath,
        base_dir: str | None = None,
        owner: str | None = None,
        group: str | None = None,
    ) -> str: ...
    def make_file(
        self,
        infiles: str | list[str] | tuple[str, ...],
        outfile: StrOrBytesPath,
        func: Callable[..., object],
        args: list[Incomplete],
        exec_msg: str | None = None,
        skip_msg: str | None = None,
        level: Unused = 1,
    ) -> None: ...
