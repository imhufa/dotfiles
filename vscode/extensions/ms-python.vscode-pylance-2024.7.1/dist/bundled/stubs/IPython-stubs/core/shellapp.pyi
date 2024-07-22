"""
This type stub file was generated by pyright.
"""

from traitlets.config.configurable import Configurable

"""
A mixin for :class:`~IPython.core.application.Application` classes that
launch InteractiveShell instances, load extensions, etc.
"""
gui_keys = ...
backend_keys = ...
shell_flags = ...
addflag = ...
nosep_config = ...
shell_aliases = ...
class InteractiveShellApp(Configurable):
    """A Mixin for applications that start InteractiveShell instances.

    Provides configurables for loading extensions and executing files
    as part of configuring a Shell environment.

    The following methods should be called by the :meth:`initialize` method
    of the subclass:

      - :meth:`init_path`
      - :meth:`init_shell` (to be implemented by the subclass)
      - :meth:`init_gui_pylab`
      - :meth:`init_extensions`
      - :meth:`init_code`
    """
    extensions = ...
    extra_extensions = ...
    reraise_ipython_extension_failures = ...
    default_extensions = ...
    hide_initial_ns = ...
    exec_files = ...
    exec_PYTHONSTARTUP = ...
    file_to_run = ...
    exec_lines = ...
    code_to_run = ...
    module_to_run = ...
    gui = ...
    matplotlib = ...
    pylab = ...
    pylab_import_all = ...
    ignore_cwd = ...
    shell = ...
    interact = ...
    user_ns = ...
    def init_path(self): # -> None:
        """Add current working directory, '', to sys.path

        Unlike Python's default, we insert before the first `site-packages`
        or `dist-packages` directory,
        so that it is after the standard library.

        .. versionchanged:: 7.2
            Try to insert after the standard library, instead of first.
        .. versionchanged:: 8.0
            Allow optionally not including the current directory in sys.path
        """
        ...
    
    def init_shell(self):
        ...
    
    def init_gui_pylab(self): # -> None:
        """Enable GUI event loop integration, taking pylab into account."""
        ...
    
    def init_extensions(self): # -> None:
        """Load all IPython extensions in IPythonApp.extensions.

        This uses the :meth:`ExtensionManager.load_extensions` to load all
        the extensions listed in ``self.extensions``.
        """
        ...
    
    def init_code(self): # -> None:
        """run the pre-flight code, specified via exec_lines"""
        ...
    


