# -*- makefile -*-
#----------------------------------------------------------------------------
#       GNU ACE Workspace
#
# $Id$
#
# This file was generated by MPC.  Any changes made directly to
# this file will be lost the next time it is generated.
#
# MPC Command:
# /home/agilehealth_ai/DDS/OpenDDS-3.14.1/ACE_wrappers/bin/mwc.pl -type gnuace
#
#----------------------------------------------------------------------------

MAKEFILE = GNUmakefile

ifeq ($(findstring k,$(MAKEFLAGS)),k)
  KEEP_GOING = -
endif

include $(ACE_ROOT)/include/makeinclude/macros.GNU

all: messenger_idl_test NodeJSTest v8stubs test_publisher test_subscriber

depend: messenger_idl_test-depend NodeJSTest-depend v8stubs-depend test_publisher-depend test_subscriber-depend

REMAINING_TARGETS := $(filter-out all depend,$(TARGETS_NESTED:.nested=)) $(CUSTOM_TARGETS)
.PHONY: $(REMAINING_TARGETS)

$(REMAINING_TARGETS):
	$(KEEP_GOING)@cd idl && $(MAKE) -f GNUmakefile.messenger_idl_test $(@)
	$(KEEP_GOING)@cd node_modules/opendds/test/idl && $(MAKE) -f GNUmakefile.NodeJSTest $(@)
	$(KEEP_GOING)@cd node_modules/opendds/tools/v8stubs && $(MAKE) -f GNUmakefile.v8stubs $(@)
	$(KEEP_GOING)@cd node_modules/opendds/test && $(MAKE) -f GNUmakefile.test_publisher $(@)
	$(KEEP_GOING)@cd node_modules/opendds/test && $(MAKE) -f GNUmakefile.test_subscriber $(@)

.PHONY: messenger_idl_test
messenger_idl_test:
	$(KEEP_GOING)@cd idl && $(MAKE) -f GNUmakefile.messenger_idl_test all

.PHONY: messenger_idl_test-depend
messenger_idl_test-depend:
	$(KEEP_GOING)@cd idl && $(MAKE) -f GNUmakefile.messenger_idl_test depend

.PHONY: NodeJSTest
NodeJSTest:
	$(KEEP_GOING)@cd node_modules/opendds/test/idl && $(MAKE) -f GNUmakefile.NodeJSTest all

.PHONY: NodeJSTest-depend
NodeJSTest-depend:
	$(KEEP_GOING)@cd node_modules/opendds/test/idl && $(MAKE) -f GNUmakefile.NodeJSTest depend

.PHONY: v8stubs
v8stubs:
	$(KEEP_GOING)@cd node_modules/opendds/tools/v8stubs && $(MAKE) -f GNUmakefile.v8stubs all

.PHONY: v8stubs-depend
v8stubs-depend:
	$(KEEP_GOING)@cd node_modules/opendds/tools/v8stubs && $(MAKE) -f GNUmakefile.v8stubs depend

.PHONY: test_publisher
test_publisher: NodeJSTest v8stubs
	$(KEEP_GOING)@cd node_modules/opendds/test && $(MAKE) -f GNUmakefile.test_publisher all

.PHONY: test_publisher-depend
test_publisher-depend:
	$(KEEP_GOING)@cd node_modules/opendds/test && $(MAKE) -f GNUmakefile.test_publisher depend

.PHONY: test_subscriber
test_subscriber: NodeJSTest v8stubs
	$(KEEP_GOING)@cd node_modules/opendds/test && $(MAKE) -f GNUmakefile.test_subscriber all

.PHONY: test_subscriber-depend
test_subscriber-depend:
	$(KEEP_GOING)@cd node_modules/opendds/test && $(MAKE) -f GNUmakefile.test_subscriber depend

project_name_list:
	@echo messenger_idl_test
	@echo test_publisher
	@echo test_subscriber
	@echo NodeJSTest
	@echo v8stubs
