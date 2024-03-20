create_component:
	@read -p "Enter component name: " component_name; \
	mkdir -p apps/web/components/$$component_name; \
	mkdir -p apps/native/components/$$component_name; \
	mkdir -p packages/common/components/$$component_name; \
	echo "Component $$component_name created successfully."