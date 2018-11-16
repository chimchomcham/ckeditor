CKEDITOR.plugins.add( 'bootstrapcolumns', {
    icons: 'bootstrapcolumns',
    init: function( editor ) {
        //Plugin logic goes here.
				editor.addCommand( 'insertColumns', new CKEDITOR.dialogCommand( 'columnDialog' )

					// {
				  //   exec: function( editor ) {
				  //       editor.insertHtml( 'The current date and time is: <em></em>' );
				  //   }
					// }
				);

				editor.ui.addButton( 'bootstrapcolumns', {
				    label: 'Insert Timestamp',
				    command: 'insertColumns',
				    toolbar: 'insert'
				});

				CKEDITOR.dialog.add( 'columnDialog', this.path + 'dialogs/columns.js' );

				CKEDITOR.dialog.add( 'columnDialog', function ( editor ) {
						return {
								title: 'Column Properties',
								minWidth: 400,
								minHeight: 200,

								contents: [
								    {
								        id: 'tab-basic',
								        label: 'Basic Settings',
								        elements: [
								            {
								                type: 'text',
								                id: 'abbr',
								                label: 'Abbreviation',
								                validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty." )
								            },
								            {
								                type: 'text',
								                id: 'title',
								                label: 'Explanation',
								                validate: CKEDITOR.dialog.validate.notEmpty( "Explanation field cannot be empty." )
								            }
								        ]
								    },
								    {
								        id: 'tab-adv',
								        label: 'Advanced Settings',
								        elements: [
								            {
								                type: 'text',
								                id: 'id',
								                label: 'Id'
								            }
								        ]
								    }
								]
						};
				});
    }
});
